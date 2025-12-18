from django.urls import path
from . import views

urlpatterns = [
    path('dealers/', views.get_dealers),
    path('dealer/<int:pk>/', views.get_dealer),
    path('reviews/<int:dealer_id>/', views.get_reviews),
    path('review/', views.add_review),
    path('cars/', views.get_cars),
]
