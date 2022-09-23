
package com.backend.kfl.Interface;

import com.backend.kfl.Entity.Persona;
import java.util.List;



public interface IPersonaService {
    //traer una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo Persona
    
    public void savePersona(Persona persona);
    
    //Borrar un objeto por ID
    
    public void deletePersona(Long id);
    
    //Buscar persona por ID
    
    public Persona findPersona(Long id);
}
