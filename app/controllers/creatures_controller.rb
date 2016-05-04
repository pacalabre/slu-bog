class CreaturesController < ApplicationController
  def index
    @creatures = Creature.all
  end

  def create
    creature = Creature.create
    redirect_to creature_path

  end


  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
