package com.acorn.melody2.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@NoArgsConstructor
@Entity
@Table(name = "UserAccount")
public class TestUserAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long userAccountId;


    private String password;


    private String Name;
}
