package com.RiwiNotes.infrastructure.abstract_services;

import com.RiwiNotes.infrastructure.abstract_services.crud.ICreate;
import com.RiwiNotes.infrastructure.abstract_services.crud.IDelete;
import com.RiwiNotes.infrastructure.abstract_services.crud.IFindAll;
import com.RiwiNotes.infrastructure.abstract_services.crud.IFindById;
import com.RiwiNotes.infrastructure.abstract_services.crud.IUpdate;

public interface IGenericService<E,ID,RQ,RS> 
    extends IFindAll<RS>, IFindById<ID,RS>, ICreate<RQ,RS>,IUpdate<ID,RQ,RS>, IDelete<ID>
{
    public E find(ID id);
}
