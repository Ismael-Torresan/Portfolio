from rest_framework import serializers
from .models import Company


class CompanySerializer(serializers.ModelSerializer):
    # another_field = serializers.CharField(source=f"{'title'}")
    # # field = f"{Products.title} 'asafkja' {Products.price}"

    class Meta:
        model = Company
        fields = "__all__"
        # fields = [
        #     "title",
        #     "content",
        #     "price",
        #     "sale_price",
        #     "get_discount",
        #     "another_field",
        # ]
