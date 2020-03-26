package com.spaceRatingApp.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spaceRatingApp.SpaceRepository;
import com.spaceRatingApp.entity.SpaceEntity;
import com.spaceRatingApp.service.SpaceService;
import com.spaceRatingApp.shared.SpaceDto;

@Service
public class SpaceServiceImpl implements SpaceService {
	
	@Autowired
	SpaceRepository spaceRepository;

	@Override
	public SpaceDto createSpace(SpaceDto space) {
		
		SpaceEntity spaceEntity = new SpaceEntity();
		BeanUtils.copyProperties(space, spaceEntity);
		
		spaceEntity.setExternalId("1234");
		
		SpaceEntity storedSpace = spaceRepository.save(spaceEntity);
		
		SpaceDto returnValue = new SpaceDto();
		BeanUtils.copyProperties(storedSpace, returnValue);
		
		return returnValue;
	}

	@Override
	public List<SpaceDto> getAllSpaces() {
		List<SpaceDto> returnValue = new ArrayList<>();
				
		List<SpaceEntity> spaces =  (List<SpaceEntity>) spaceRepository.findAll();
//		List<UserEntity> users = usersPage.getContent();
		
		for(SpaceEntity spaceEntity : spaces) {
			SpaceDto spaceDto = new SpaceDto();
			BeanUtils.copyProperties(spaceEntity, spaceDto);
			returnValue.add(spaceDto);
		}
		return returnValue;
	}

}
