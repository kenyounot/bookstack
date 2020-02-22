class Book < ApplicationRecord
  belongs_to :user
  has_many :notes, :dependent => :destroy

  validates :title, :summary, :author, :genre, :img_url, presence: true
  validates :summary, length: { maximum: 140 }
end
