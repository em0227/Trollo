class User < ApplicationRecord
    validates :email, uniqueness: true
    validates :email, :name, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    after_initialize :ensure_session_token
    #FIGVAPER

    has_many :boards,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Board

    has_many :lists,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :List
    
    has_many :cards,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Card

    has_many :shares
    has_many :shared_boards,
        through: :shares,
        source: :shareable,
        source_type: 'Board'
    has_many :shared_cards,
        through: :shares,
        source: :shareable,
        source_type: 'Card'

    attr_reader :password

    def self.find_by_crendentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
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

    def is_password?(password)
        password_obj = BCrypt::Password.new(self.password_digest)
        password_obj.is_password?(password)
    end
end
