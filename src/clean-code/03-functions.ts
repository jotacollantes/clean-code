(() => {
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieCastById(movieId: string) {
    console.log({ movieId });
  }

  function getBioActorById(actorId: string) {
    console.log({ actorId });
  }

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function movie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  interface Actor {
    fullName: string;
    birthDate: Date;
  }
  function createActor({ fullName, birthDate }: Actor): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log(`Crear actor ${birthDate}`);
    return true;
  }

  //Continuacion

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    let result: number;
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
