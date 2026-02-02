import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';

@Controller('speakers')
export class SpeakersController {

    // Get /speakers?scheduleDay=3
    @Get()
    findAll(@Query('scheduleDay', ParseIntPipe) scheduleDay: number){
        return { name: 'John Doe', expertise: 'NestJS', scheduleDay: `${scheduleDay}`};
    }

    // Get /speakers/:id
    @Get(':id')
    findOne(@Param('id') id: string){
        return {id}
    }

    // Post /speakers
    @Post()
    create(@Body() speaker: {name: string, expertise: string}){  
        return speaker;
    }

    // Put /speakers/:id
    @Put(':id')
    update(@Param('id') id: string, @Body() speaker: {name?: string, expertise?: string}){
        return {id, ...speaker};
    }

    // Delete /speakers/:id
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string){
        return;
    }
}
