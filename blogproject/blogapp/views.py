from django.shortcuts import render

# Create your views here.
def home(request):
    Range = range(5)
    return render(request,'home.html',{'range':Range}) 


def login(request):

    return render(request,'login.html')




def signup(request):

    return render(request,'signup.html')