import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { SpeakersService } from './speakers.service';

@Controller('speakers')
export class SpeakersController {
    constructor(private readonly speakersService: SpeakersService) {}

    // Get /speakers?scheduleDay=3
    @Get()
    findAll(){
        return this.speakersService.findAll();
    }

    // Get /speakers/:id
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.speakersService.findOne(id);
    }

    // Post /speakers
    @Post()
    create(@Body() speaker: {name: string, expertise: string}){  
        return this.speakersService.create(speaker);
    }

    // Put /speakers/:id
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() speaker: {name?: string, expertise?: string}){
        return this.speakersService.update(id, speaker);
    }

    // Delete /speakers/:id
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseIntPipe) id: number){
        return this.speakersService.delete(id);
    }
}
