import { Controller, Inject, Post, Get, Body } from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";
import { TaskDTO } from './dto/task.dto';
import { Observable } from 'rxjs';

@Controller('/api/task')
export class TaskController {
    constructor(@Inject("TASK_SERVICE") private readonly client: ClientProxy){}

    async onModuleInit(){
        await this.client.connect()
    }

    @Post()
    create(@Body() taskDTO: TaskDTO) : Observable<any>{
        console.log('pass')
        return this.client.send({cmd: "create-task"}, taskDTO);
    }
}
