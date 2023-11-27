from django.urls import path
from . import views
from .views import ChangeUsernameView



app_name = "profiles"

urlpatterns = [
    path("<str:username>/", views.ProfileDetailView.as_view(), name="detail"),
    path("<str:username>/follow/", views.FollowView.as_view(), name="follow"),
    path("<int:pk>/change_username/", ChangeUsernameView.as_view(), name="change_username"),


]
