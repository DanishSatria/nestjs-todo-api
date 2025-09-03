import { Injectable, NotFoundException } from '@nestjs/common';

export interface Todo {
    id: number;
    title: string;
    status: string;
}

@Injectable()
export class TodosService {
    private todos: Todo[] = [];
    private counter = 1;

    findAll(): Todo[] {
        return this.todos;
    }

    findOne(id: number): Todo {
        const todo = this.todos.find(t => t.id ===id);
        if (!todo) throw new NotFoundException(`Todo dengan id ${id} tidak ditemukan`);
        return todo;
    }

    create(data: { title: string; status: string}): Todo {
        const newTodo: Todo = { id: this.counter++, ...data};
        this.todos.push(newTodo);
        return newTodo;
    }
    update(id: number, data: { title?: string; status?: string }): Todo {
    const todo = this.findOne(id);
    if (data.title !== undefined) todo.title = data.title;
    if (data.status !== undefined) todo.status = data.status;
    return todo;
  }

  remove(id: number): { message: string } {
    const idx = this.todos.findIndex(t => t.id === id);
    if (idx === -1) throw new NotFoundException(`Todo dengan id ${id} tidak ditemukan`);
    this.todos.splice(idx, 1);
    return { message: `Todo dengan id ${id} berhasil dihapus` };
  }
}
