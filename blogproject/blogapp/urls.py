from django.urls import path
from .views import login ,signup ,home
urlpatterns = [
    path('login/',login,name="login"),
    path('sign-up/',signup,name="signup"),
]