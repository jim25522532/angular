import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { EditorComponent } from './editor/editor.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PostComponent, EditorComponent, PostsComponent],
  exports: [PostsComponent, PostComponent , EditorComponent]
})
export class PostsModule { }
