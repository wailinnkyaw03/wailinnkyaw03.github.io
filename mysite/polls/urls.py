from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
    path('adminpage/', views.adminpage, name='adminpage'),
    path('adminpage/adminlogin/', views.adminlogin, name='adminlogin'),
    path('list/', views.list, name='list'),
    path('add/', views.add, name='add'),
    path('add/addrecord/', views.addrecord, name='addrecord'),
    path('list/delete/<int:id>', views.delete, name='delete'),
    path('list/update/<int:id>', views.update, name='update'), 
    path('list/update/updaterecord/<int:id>', views.updaterecord, name='updaterecord'),
]