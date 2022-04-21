import { HttpException, Injectable } from '@nestjs/common';
import { Place } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class RecommenderService {
  constructor(private prisma: PrismaService) {}
  async getRecommendationsPerPlace(
    placeId: number,
  ): Promise<Place[] | HttpException> {
    const place = await this.prisma.place.findUnique({
      where: {
        id: placeId,
      },
    });
    // vector [district, category, orientation, reservation]
    const basePlaceVector = [
      place.district,
      place.categoryId,
      place.orientationId,
      place.hasReservation,
    ];

    const places = await this.prisma.place.findMany({
      where: {
        OR: [
          { district: place.district },
          {
            categoryId: place.categoryId,
          },
          {
            orientationId: place.orientationId,
          },
          { hasReservation: place.hasReservation },
        ],
      },
    });
    let scores = [];

    //loop over places, represent as vector, calculate score (count)
    places.map((p) => {
      const placeVector = [
        p.district,
        p.categoryId,
        p.orientationId,
        p.hasReservation,
      ];
      if (p.id != placeId) {
        const score = this.calculateScore(basePlaceVector, placeVector);
        scores.push({ id: p.id, score: score });
      }
    });
    scores.sort((a, b) => (a.score > b.score ? -1 : 1));
    try {
      scores = scores.slice(0, 3);
    } catch (e) {}
    const recommendedPlacesIds = scores.map((p) => {
      return p.id;
    });

    const recommendedPlaces = await this.prisma.place.findMany({
      where: {
        id: {
          in: recommendedPlacesIds,
        },
      },
    });
    return recommendedPlaces;
  }

  calculateScore(basePlaceVector: any[], placeVector: any[]) {
    let score = 0;
    for (let i = 0; i < basePlaceVector.length; i++) {
      if (basePlaceVector[i] == placeVector[i]) {
        score++;
      }
    }
    return score;
  }
}
