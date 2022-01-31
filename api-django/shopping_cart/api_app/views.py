from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import CartItem

# Create your views here.

class CarItemView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = CartItem.objects.all()