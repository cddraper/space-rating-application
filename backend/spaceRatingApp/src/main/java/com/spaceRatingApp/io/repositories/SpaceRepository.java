package com.spaceRatingApp.io.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.spaceRatingApp.io.entity.SpaceEntity;

@Repository
public interface SpaceRepository extends CrudRepository<SpaceEntity, Long> {
	SpaceEntity findByExternalId(String externalId);
	List<SpaceEntity> findAllByUserId(String userId);
}
