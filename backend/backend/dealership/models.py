from django.db import models
from django.contrib.auth.models import User

class Dealership(models.Model):
    name = models.CharField(max_length=200)
    state = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    zip_code = models.CharField(max_length=10)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} ({self.state})"

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    dealership = models.ForeignKey(Dealership, on_delete=models.CASCADE)
    review = models.TextField()
    sentiment = models.CharField(max_length=20, blank=True)
    time = models.DateTimeField(auto_now_add=True)
    purchase = models.BooleanField(default=False)
    purchase_date = models.DateField(null=True, blank=True)
    car_make = models.CharField(max_length=50)
    car_model = models.CharField(max_length=50)
    car_year = models.IntegerField()

    def __str__(self):
        return f"Review by {self.user.username} on {self.dealership.name}"

class Car(models.Model):
    make = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    year = models.IntegerField()

    def __str__(self):
        return f"{self.make} {self.model} ({self.year})"
