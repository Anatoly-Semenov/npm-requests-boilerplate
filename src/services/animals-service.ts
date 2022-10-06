import BaseService from "./base-service"

// Types
import type { Constructor } from "../types"
import type {Animal, AnimalDTO} from "../types/animal-service"

export default class AnimalsService extends BaseService {
	constructor(ctx: Constructor) {
		super(ctx)
	}

	getAnimals(): Promise<Animal[]> {
		return this.httpClient.$get("/animals")
	}

	getAnimal(id: string): Promise<Animal> {
		return this.httpClient.$get(`/animals/${id}`)
	}

	deleteAnimal(id: string): Promise<Animal> {
		return this.httpClient.$delete(`/animals/${id}`)
	}

	deleteUpdate(id: string, animal: AnimalDTO): Promise<Animal> {
		return this.httpClient.$delete(`/animals/${id}`, animal)
	}

}
