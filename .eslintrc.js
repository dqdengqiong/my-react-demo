module.exports = {
    root: true,
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended', //使用@typescript-eslint/eslint-plugin中的推荐规则
        'plugin:react/recommended', //使用@eslint-plugin-react中的推荐规则
        'prettier/@typescript-eslint', //使用eslint-config-prettier禁用@typescript-eslint/eslint-plugin中的ESLint规则，避免与 prettier 冲突
        'plugin:prettier/recommended', //启用eslint-plugin-prettier并将prettier的错误显示为ESLint错误。确保这始终是扩展数组中的最后一个配置。
    ],
    env: {
        'browser': true,
		    'es6': true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
            'jsx': true
        }
    },
    plugins: [
        'react',
        '@typescript-eslint',
        //'@typescript-eslint/tslint',
        'react-hooks',
        'jest',
        'prettier',
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
                'no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-expressions': 2,
            },
        },
    ],
    // eslint 适配 webpack里面配置的别名和路径
    settings: {
      'import/resolver': {
        node: {
          extensions: [
            '.ts',
            '.tsx',
          ],
          alias: {
              '@': './src',
            },
        },
        webpack: {
          //config: 'build/webpack.base.conf.js',
        },
      },
    },
    rules: {
    	"no-implicit-coercion": 2, // 禁止使用短符号进行类型转换
	    'no-unsafe-finally': 2, // 禁止在 finally 语句块中出现控制流语句
	    'max-len': 0, // 强制一行的最大长度
	    'no-underscore-dangle': 0, // 禁止标识符中有悬空下划线
	    'prefer-destructuring': 0, // 优先使用数组和对象解构
	    'no-param-reassign': 0, // 禁止对 function 的参数进行重新赋值
	    'consistent-return': 0, // 要求 return 语句要么总是指定返回的值，要么不指定
	    'no-bitwise': 0, // 禁止使用按位操作符
	    'no-unused-expressions': 1, // 禁止未使用过的表达式
	    'import/no-extraneous-dependencies': 1, // 禁止使用无关的软件包
	    'func-names': 0, // 要求或禁止使用命名的 function 表达式
	    'no-plusplus': 0, // 禁用一元操作符 ++ 和 --
	    'object-shorthand': 0, // 强制对象字面量缩写语法
	    'arrow-parens': 0, // 要求箭头函数的参数使用圆括号
	    'max-lines-per-function': 0, // 强制函数最大行数
	    'no-irregular-whitespace': 2, // 禁止不规则的空白
	    'no-redeclare': 2, // 禁止多次声明同一变量
	    'import/extensions': ['error', 'always', {
	        js: 'never',
	        vue: 'never',
	    }], // 确保在导入路径中一致使用文件扩展名
	    semi: [2, 'always'], // 句末加分号
	    'lines-around-comment': ['error', {
	        beforeBlockComment: true,
	        allowBlockStart: true,
	    }], // 块级注释前空一行
		  'jsx-a11y/no-static-element-interactions': 0, // 强制<div>具有单击处理程序的非交互式可见元素（例如）使用role属性
      'jsx-a11y/click-events-have-key-events': 0,// 强制一个可单击的非交互式元素具有至少一个键盘事件侦听器
      'jsx-a11y/anchor-is-valid': 0, // 强制所有锚点都是有效的可导航元素
      'react/jsx-filename-extension': 0,// 限制可能包含JSX的文件扩展名
      'react/destructuring-assignment': 0,// 强制使用一致的props, state, context解构分配
      'react-hooks/rules-of-hooks': 'error', // 检查钩子规则 https://reactjs.org/docs/hooks-rules.html
      'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    },
};
