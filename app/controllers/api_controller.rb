
class ApiController < ApplicationController

  def all
    @creatures = Creature.all
    render :json => @creatures
  end

  def show
    @creatures = Creature.find_by_id params[:id]
    render :json => @hobby
  end
end
