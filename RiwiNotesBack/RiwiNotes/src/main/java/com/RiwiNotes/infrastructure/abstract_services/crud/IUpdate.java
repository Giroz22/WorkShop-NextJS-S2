package com.RiwiNotes.infrastructure.abstract_services.crud;

public interface IUpdate<ID, RQ, RS> {
    public RS update(ID id, RQ request);
}
