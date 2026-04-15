import { Routes } from '@angular/router';

export const routes: Routes = [

  // 🔐 Auth
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login')
        .then(m => m.Login)
  },

  // 📊 Dashboard (default page)
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard/dashboard/dashboard')
        .then(m => m.Dashboard)
  },

  // 📝 Create Task
  {
    path: 'create-task',
    loadComponent: () =>
      import('./features/tasks/create-task/create-task')
        .then(m => m.CreateTask)
  },

  // 📄 Task Detail (dynamic)
  {
    path: 'task/:id',
    loadComponent: () =>
      import('./features/tasks/task-detail/task-detail')
        .then(m => m.TaskDetail)
  },

  // 📁 Projects
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/project-list/project-list')
        .then(m => m.ProjectList)
  },

  // ❌ Fallback
  {
    path: '**',
    redirectTo: ''
  }
];