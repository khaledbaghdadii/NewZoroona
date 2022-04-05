import { Module } from '@nestjs/common';

<<<<<<< HEAD
@Module({})
=======
import { PlaceController } from './place.controller';
import { PlaceService } from './place.service';

@Module({
    imports: [],
    controllers: [PlaceController],
    providers: [PlaceService],
})
>>>>>>> 09c722b4e4e456f6898aacd1d01503083983b34e
export class PlaceModule {}
