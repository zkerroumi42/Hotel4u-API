import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import {ApiResponse } from '@nestjs/swagger'
import { CommentService, } from './comment.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Roles } from 'src/auth/roles/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';



@Controller('api/comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}


  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('list')
  @ApiResponse({
  status:201,
  description:'la liste des Comments',
  })
  @ApiResponse({
       status:404,
       description:'pas de pages'
       })


    async findAll() : Promise<Comment[]> {
      return await this.commentService.findAll();
    }


  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('read/:id')
  async getByid(@Param('id') id: number) {
  return await this.commentService.read(id);
  }

  // @Roles('Admin')
  // @UseGuards(JwtAuthGuard, RoleGuard)
   @Post('create')
    create(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
    return this.commentService.create(createCommentDto);
    }

    // @Roles('Admin')
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Patch('update/:id')
    update(@Param('id') id: number, @Body() updateCommentDto: CreateCommentDto): Promise<Comment> {
      return this.commentService.update(id, updateCommentDto);
    }


    // @Roles('User')
    // @UseGuards(JwtAuthGuard, RoleGuard)
    @Delete('delete/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number): Promise<Comment> {
      return this.commentService.delete(id);
    }

}
