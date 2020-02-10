from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Person, Employee


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['person_id', 'last_name', 'first_name', 'birth_date']


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['last_name', 'first_name', 'birth_date', 'person_id', 'employee_id', 'employee_number', 'employed_date', 'terminated_date']

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Employee.objects.create(**validated_data)

    # def update(self, instance, validated_data):
    #     """
    #     Update and return an existing `Snippet` instance, given the validated data.
    #     """
    #     instance.last_name = validated_data.get('last_name', instance.last_name)
    #     instance.first_name = validated_data.get('first_name', instance.first_name)
    #     instance.birth_date = validated_data.get('birth_date', instance.birth_date)
    #     instance.person_id = validated_data.get('person_id', instance.person_id)
    #     instance.employee_id = validated_data.get('employee_id', instance.employee_id)
    #     instance.employee_number = validated_data.get('employee_number', instance.employee_number)
    #     instance.employed_date = validated_data.get('employed_date', instance.employed_date)
    #     instance.terminated_date = validated_data.get('terminated_date', instance.terminated_date)
    #     instance.save()
    #     return instance