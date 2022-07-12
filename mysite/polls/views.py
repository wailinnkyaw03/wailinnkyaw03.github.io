from email import message
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from .models import Polls
from django.urls import reverse
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

def index(request):
  mypolls = Polls.objects.all().values()
  template = loader.get_template('index.html')
  context = {
    'mypolls': mypolls,
  }
  return HttpResponse(template.render(context, request))

def register(request):
  if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('add')
            
  else:
      form = UserCreationForm()
  context = {'form': form}
  return render(request, 'registration/register.html', context)
  

def adminpage(request):
  template = loader.get_template('adminlogin.html')
  return HttpResponse(template.render({}, request))

def adminlogin(request):
  k = request.POST['pass']
  if (k==""):
    messages.info(request, "Please Enter ACCESSED PASSCODE!")
    return HttpResponseRedirect(reverse('adminpage'))
  elif (k=="jkt"):
    messages.info(request, 'ACCESS PASSED!')
    return HttpResponseRedirect(reverse('list'))
  else:
    messages.info(request, 'ACCESS DENIED!')
  return HttpResponseRedirect(reverse('adminpage'))
        

def list(request):
  mypolls = Polls.objects.all().values()
  template = loader.get_template('list.html')
  context = {
    'mypolls': mypolls,
  }
  return HttpResponse(template.render(context, request))

  
def add(request):
  template = loader.get_template('add.html')
  return HttpResponse(template.render({}, request))

def addrecord(request):
  a = request.POST['first']
  b = request.POST['last1']
  c = request.POST['father']
  d = request.POST['dob']
  e = request.POST['nrc']
  f = request.POST['contact']
  g = request.POST['email']
  h = request.POST['address']
  i = request.POST['edu']
  j = request.POST['job']
  if (a=="" or b=="" or c=="" or d=="" or e=="" or f=="" or g=="" or h=="" or i=="" or j==""):
    messages.info(request, "All fields are required!")
    return HttpResponseRedirect(reverse('add'))
  
  else:
    poll = Polls(firstname = a, lastname = b, fathername = c, dateofbirth = d, nrcno = e, contactno= f, email = g, pAddress = h, edu = i, job= j)
    poll.save()
    messages.info(request, 'You have successfully enrolled!')
  return HttpResponseRedirect(reverse('index'))

def delete(request, id):
  Poll = Polls.objects.get(id=id)
  Poll.delete()
  return HttpResponseRedirect(reverse('list'))

def update(request, id):
  mypoll = Polls.objects.get(id=id)
  template = loader.get_template('update.html')
  context = {
    'mypoll': mypoll,
  }
  return HttpResponse(template.render(context, request))

def updaterecord(request, id):
  first = request.POST['first']
  last = request.POST['last1']
  father = request.POST['father']
  dob = request.POST['dob']
  nrc = request.POST['nrc']
  contact = request.POST['contact']
  email = request.POST['email']
  address = request.POST['address']
  edu = request.POST['edu']
  job = request.POST['job']
  
  poll = Polls.objects.get(id=id)
  poll.firstname = first
  poll.lastname = last
  poll.fathername = father
  poll.dateofbirth = dob
  poll.nrcno = nrc
  poll.contactno = contact
  poll.email = email 
  poll.pAddress = address
  poll.edu = edu
  poll.job = job
  poll.save()
  return HttpResponseRedirect(reverse('list'))