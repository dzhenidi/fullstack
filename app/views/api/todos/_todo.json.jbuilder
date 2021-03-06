json.extract! todo,
  :id,
  :title,
  :description,
  :author_id,
  :todoer_id,
  :project_id,
  :done,
  :due_date

json.author todo.author.username
json.todoer todo.todoer.username
json.projectName todo.project.title
json.createdAt todo.created_at.strftime("%b %d")

json.completedAt todo.completed_at ? todo.completed_at.to_s(:short) : ""
