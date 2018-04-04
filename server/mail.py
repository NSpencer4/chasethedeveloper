import webapp2
from utils import APIRequest
from google.appengine.api import mail
from models import Mail
import logging

class MailRequest(APIRequest):
    def post(self):
      body = self.check_body([
          'name',
          'email',
          'message'
      ])
      try:
        mail.send_mail(sender="n.chase.spencer@gmail.com",
                       to=body['email'],
                       subject='New Contact Message',
                       body=body['message'])

        mail_id = Mail.create(name=body['name'],
                              email=body['email'],
                              message=body['message'])
        self.response.out.write(mail_id)
      except ValueError as e:
        self.abort(code=404, detail=e.message)

app = webapp2.WSGIApplication([
    ('/mailContact', MailRequest)
])
