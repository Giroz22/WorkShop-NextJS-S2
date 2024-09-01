package com.RiwiNotes.infrastructure.abstract_services.crud;

public interface ICreate<RQ, RS> {
    public RS create(RQ request);
}
