from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    # another_field = serializers.CharField(source=f"{'title'}")
    # # field = f"{Products.title} 'asafkja' {Products.price}"

    class Meta:
        model = Product
        fields = "__all__"
        # fields = [
        #     "title",
        #     "content",
        #     "price",
        #     "sale_price",
        #     "get_discount",
        #     "another_field",
        # ]
