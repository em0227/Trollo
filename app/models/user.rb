class User < ApplicationRecord
    validates :email, uniqueness: true
    validates :email, :name, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    after_initialize :ensure_session_token
    #FIGVAPER
    attr_reader :password

    def self.find_by_crendentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_passowrd?(password)
            return user
        else
            return nil 
        end
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        return self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_passowrd?(password)
        password_obj = BCrypt::Password.new(self.password_digest)
        password_obj.is_passowrd?(password)
    end
end
