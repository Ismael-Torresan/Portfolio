from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    discount = serializers.IntegerField(default=50)
    discount_friend = serializers.IntegerField(default=75)

    class Meta:
        model = Product
        fields = "__all__"
