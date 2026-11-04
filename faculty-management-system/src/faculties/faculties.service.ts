import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';
import { Faculty } from './entities/faculty.entity.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,
  ) {}

  async createFaculty(dto: CreateFacultyDto) {
    const faculty = await this.facultyRepository.save(dto);
    return { message: 'Faculty Created Successfully', data: faculty };
  }
}