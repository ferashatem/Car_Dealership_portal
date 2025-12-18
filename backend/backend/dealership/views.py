from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Dealership, Review, Car
from .serializers import DealershipSerializer, ReviewSerializer, CarSerializer
from datetime import datetime

@api_view(['GET'])
@permission_classes([AllowAny])
def get_dealers(request):
    state = request.GET.get('state', None)
    if state:
        dealers = Dealership.objects.filter(state__iexact=state)
    else:
        dealers = Dealership.objects.all()
    serializer = DealershipSerializer(dealers, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_dealer(request, pk):
    dealer = Dealership.objects.get(id=pk)
    serializer = DealershipSerializer(dealer)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_reviews(request, dealer_id):
    reviews = Review.objects.filter(dealership_id=dealer_id).order_by('-time')
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_review(request):
    data = request.data
    review = Review.objects.create(
        user=request.user,
        dealership_id=data['dealership'],
        review=data['review'],
        purchase=data['purchase'],
        purchase_date=data['purchase_date'],
        car_make=data['car_make'],
        car_model=data['car_model'],
        car_year=data['car_year']
    )
    serializer = ReviewSerializer(review)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def get_cars(request):
    cars = Car.objects.all()
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)
