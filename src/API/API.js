
class API {
    _baseUrl = 'https://swapi.co/api';
    async getResources(url){
      const res = await fetch(`${this._baseUrl}${url}`);
        if (!res.ok){
            throw new Error(res.status);
        }
        return await res.json();
    }
    getAllPlanet(){
        const res = this.getResources('/planets');
        return res.result.map((pl)=>this._transformData(pl))
    }
    async getPlanet(id){
        const res = await this.getResources(`/planets/${id}`);
        return this._transformData(res);
    }
    getAllPeople(){
        const res = this.getResources('/people');
        return res.result.map((pl)=>this._transformData(pl));
    }
    getPeople(id){
        return this.getResources(`/people/${id}`);
    }
    getAllStarships(){
        const res =  this.getResources(`/starships`);
        return res.result.map((pl)=>this._transformData(pl));
    }
    getStarship(id){
        return this.getResources(`/starships/${id}`);
    }
    _transformData(planet){
        const idReg = /\/([0-9]*)\/$/;
        const id = planet.url.match(idReg)[1];
        return{
            population: planet.population,
            rotation: planet.rotation_period,
            diametr: planet.diameter,
            name: planet.name,
            id
        }
    }
}

export default API