from django.db import models

# Create your models here.
class Person(models.Model):
    person_id = models.IntegerField()
    last_name = models.CharField(max_length=128)
    first_name = models.CharField(max_length=128)
    birth_date = models.DateField()


class Employee(Person):
    employee_id = models.IntegerField()
    #person_id = models.IntegerField()
    employee_number = models.CharField(max_length=16)
    employed_date = models.DateField()
    terminated_date = models.DateField()