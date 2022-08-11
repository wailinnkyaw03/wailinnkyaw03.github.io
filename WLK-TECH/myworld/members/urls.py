from django.urls import path

from . import views

urlpatterns = [
  path('', views.index, name='index'),
  path('add/', views.add, name='add'),
  path('addrecord/', views.addrecord, name='addrecord'),
  path('comment/', views.comment, name='comment'),
  path('comment/delete/<int:id>', views.delete, name='delete'),
  path('comment/update/<int:id>', views.update, name='update'),
  path('comment/update/updaterecord/<int:id>', views.updaterecord, name='updaterecord'),
]