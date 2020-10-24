# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize user
    user ||= User.new

    alias_action :create, :read, :update, :destroy, to: :crud

    if user.role == "admin"
      can :manage, :all
    end
    
  end
end
