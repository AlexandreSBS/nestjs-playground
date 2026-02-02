import { Controller, Get, Param } from '@nestjs/common';

@Controller('speakers')
export class SpeakersController {

    // GET /speakers
    @Get()
    findAll(){

    }

    // GET /speakers/:id
    @Get(':id')
    findOne(@Param('id') id: string){
        
    }
}
