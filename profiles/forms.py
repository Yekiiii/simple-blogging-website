from .models import User
from django import forms


class ChangeUsernameForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username']  # Add other fields as needed

    def __init__(self, *args, **kwargs):
        super(ChangeUsernameForm, self).__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.update({'class': 'form-control'})
