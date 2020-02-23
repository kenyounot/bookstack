class Book < ApplicationRecord
  belongs_to :user
  has_many :notes, :dependent => :destroy

  validates_uniqueness_of :title, scope: :user_id
  validates :title, :summary, :author, :genre, :img_url, presence: true
end
