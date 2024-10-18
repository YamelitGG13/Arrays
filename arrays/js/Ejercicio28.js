function agruparPorDecadas(arr) {
    return arr.reduce((grupos, persona) => {
      let decada = Math.floor(persona.edad / 10) * 10;
      if (!grupos[decada]) {
        grupos[decada] = [];
      }
      grupos[decada].push(persona);
      return grupos;
    }, {});
  }

  
  
  