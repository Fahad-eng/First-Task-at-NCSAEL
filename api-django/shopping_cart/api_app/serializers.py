from rest_framework import serializers
from .models import CartItem

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ('id', 'name', 'price', 'quantity')