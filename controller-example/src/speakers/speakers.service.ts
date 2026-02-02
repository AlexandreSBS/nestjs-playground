import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class SpeakersService {
    private speakers = [
        { id: 1, name: "John Doe", expertise: "NestJS" },
        { id: 2, name: "Jane Smith", expertise: "TypeScript" }
    ]

    private nextId = 3;

    create(speaker: { name: string; expertise: string }) {
        const newSpeaker = { id: this.nextId++, ...speaker };
        this.speakers.push(newSpeaker);
        return
    }

    findAll() {
        return this.speakers;
    }

    findOne(id: number) {
        const speaker = this.speakers.find(s => s.id === id);
        if (!speaker) {
            throw new NotFoundException(`Speaker with ID ${id} not found`);
        }
        return speaker;

    }

    update(id: number, updateData: { name?: string; topic?: string }) {
        const speaker = this.findOne(id);
        Object.assign(speaker, updateData);
        return speaker;
    }

    delete(id: number) {
        const index = this.speakers.findIndex(s => s.id === id);
        if (index === -1) {
            throw new NotFoundException(`Speaker with ID ${id} not found`);
        }
        this.speakers.splice(index, 1);
    }
}
