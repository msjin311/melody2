package com.acorn.melody2.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@NoArgsConstructor
@Entity
@Table(name = "useraccount")
public class TestUserAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserAccount_ID")
    private Long userAccountId;

    @Column(name = "PassWord")
    private String password;

    @Column(name = "Name")
    private String Name;

    @Column(name = "account_Id")
    private String accountId;
}
