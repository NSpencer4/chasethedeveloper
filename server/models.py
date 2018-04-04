from google.appengine.ext import ndb

class Mail(ndb.Model):
    name = ndb.StringProperty()
    email = ndb.StringProperty()
    message = ndb.StringProperty()

    @classmethod
    def create(cls, name, email, message):
        mail_contents = cls(name=name, email=email, message=message)

        mail_contents.put()

        return mail_contents.key.id()
