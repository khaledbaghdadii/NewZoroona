import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {Place, Report} from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class RecommenderService {
    constructor(private prisma: PrismaService) {
    }
    async getRecommendationsPerPlace(placeId: number): Promise<Place[] | HttpException> {
        const place = await this.prisma.place.findUnique({
                where: {
                    id: placeId,
                },
        });
        // vector [district, category, orientation, reservation]
        const basePlaceVector = [place.district, place.categoryId, place.orientationId, place.hasReservation]

        const places = await this.prisma.place.findMany();
        let scores = []

        //loop over places, represent as vector, calculate score (count)
        places.map(p=>{
            let placeVector = [p.district, p.categoryId, p.orientationId, p.hasReservation]
            if(p.id != placeId){
            let score = this.calculateScore(basePlaceVector,placeVector);
            scores.push({id : p.id, score : score});
            }
        })
        scores.sort((a, b) => (a.score > b.score ? -1 : 1));
        scores =scores.slice(0,3);
        let recommendedPlacesIds = scores.map(p=>{return p.id});

        const recommendedPlaces = await this.prisma.place.findMany({
            where: {
                id: {
                    in : recommendedPlacesIds
                },
            },
        });
        return places;
    }

    calculateScore(basePlaceVector: any[], placeVector: any[]) {
        let score = 0;
        for(let i=0; i<basePlaceVector.length; i++){
            if(basePlaceVector[i]==placeVector[i]){
                score++;
            }
        }
        return score;
    }


}