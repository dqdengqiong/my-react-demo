module.exports = {
    types: [
        { value: '特性', name: '特性: 一个新的特性' },
        { value: '修复', name: '修复: 修复了一个bug' },
        { value: '文档', name: '文档: 变更了文档' },
        { value: 'UI', name: 'UI: 更新UI',},
        { value: '性能', name: '性能: 提升性能', },
        { value: '测试', name: '测试: 添加一个测试' },
        { value: '配置', name: '配置: 配置文件改动'},
        { value: '依赖', name: '依赖: 添加依赖包'},
        { value: '重构', name: '重构: 代码重构，注意和特性、修复区分开',},
        { value: '删除', name: '删除: 删除代码/文件' },
        { value: '回滚', name: '回滚: 代码回退' },
      ],

    scopes: [{ 
        name: '首页' 
      },{ 
        name: '项目管理' 
      },{ 
        name: '产品管理' 
      },{ 
        name: '基金评价' 
      },{ 
        name: '存续管理' 
      }, { 
        name: '交易管理' 
      }, { 
        name: '系统管理' 
      },{
        name: '其他'
      }],

    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',

    // it needs to match the value for field type. Eg.: 'fix'
    /*
      scopeOverrides: {
        fix: [

          {name: 'merge'},
          {name: 'style'},
          {name: 'e2eTest'},
          {name: 'unitTest'}
        ]
      },
      */
    // override the messages, defaults are as follows
    messages: {
        type: '选择更改类型:\n',
        scope: '更改的范围:\n',
        // 如果allowcustomscopes为true，则使用
        // customScope: 'Denote the SCOPE of this change:',
        subject: '简短描述:\n',
        body: '详细描述. 使用"|"换行:\n',
        //breaking: 'Breaking Changes列表:\n',
        footer: '关闭的issues/bug列表. E.g.: #issue-31, #bug-34:\n',
        confirmCommit: '确认提交?'
      },

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    // skip any questions you want
    skipQuestions: ['body'],

    // limit subject length
    subjectLimit: 100,
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
};

